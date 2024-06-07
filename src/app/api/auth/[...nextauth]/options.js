import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/userModel';
import bcrypt from 'bcrypt';
import connect from '@/dbConfig/dbConfig';

const generatePassword = async () => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const randomPassword = Math.random().toString(36).slice(-8);
  const hashedPassword = await bcrypt.hash(randomPassword, salt);
  return hashedPassword;
};

export const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      async profile(profile) {
        await connect();
        // console.log('Profile GitHub: ', profile);
        let userRole = 'user';
        if (profile?.email == 'mohdjamikhann@gmail.com') {
          userRole = 'admin';
        }
        //Check if the user with this email exists.
        const userFound = await User.findOne({ email: profile?.email })
          .lean()
          .exec();
        if (!userFound) {
          //Create a new user and save it to database
          const hpassword = await generatePassword();
          await User.create({
            email: profile.email,
            username: profile.name,
            password: hpassword,
            role: userRole,
            image: profile.avatar_url,
            location: profile.location,
          });
        }

        return {
          ...profile,
          role: userRole,
          image: profile.avatar_url,
          location: profile.location,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      async profile(profile) {
        await connect();
        // console.log('Profile Google: ', profile);
        let userRole = 'user';
        if (profile?.email == 'mohdjamikhann@gmail.com') {
          userRole = 'admin';
        }
        //Check if the user with this email exists.
        const userFound = await User.findOne({ email: profile?.email })
          .lean()
          .exec();
        if (!userFound) {
          //Create a new user and save it to database
          const hpassword = await generatePassword();

          const user = await User.create({
            email: profile.email,
            username: profile.name,
            password: hpassword,
            role: userRole,
            image: profile.picture,
          });
          console.log('user from google', user);
          var userid = user._id.toString();
        }
        return {
          ...profile,
          id: profile.sub,
          userId: userid,
          role: userRole,
          image: profile.picture,
          location: profile.location,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email:',
          type: 'text',
          placeholder: 'your-email',
        },
        password: {
          label: 'password:',
          type: 'password',
          placeholder: 'your-password',
        },
      },
      async authorize(credentials) {
        await connect();
        try {
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (foundUser) {
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password,
            );

            if (match) {
              delete foundUser.password;
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // console.log('user ', user, 'TOKEN ', token);
      if (user) {
        token.role = user.role;
        token.id = user._id;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log('session ', session);

      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.image = token.image;
      }
      return session;
    },
  },
};
