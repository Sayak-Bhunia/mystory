import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28  leading-7">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <div className="mb-8">
        <p className="dark:text-neutral-300 text-neutral-700">
          Welcome to MyStory, a Next.js blog template designed for sharing
          personal experiences and stories anonymously. At MyStory, we are
          committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy outlines how we collect,
          use, and protect your data when you use our platform.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Information We Collect:</h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Personal Information:
            </strong>{' '}
            When you use MyStory, we may collect certain personal information
            such as your username. This information is used solely for the
            purpose of identifying users within the platform.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Confession Data:</strong>{' '}
            When you submit a confession anonymously, we collect the content of
            your confession. This information is stored securely and is not
            associated with any identifiable user information.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Usage Data:</strong> We
            may collect usage data such as your IP address, browser type, and
            device information for analytics purposes. This information helps us
            improve the performance and usability of our platform.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          How We Use Your Information:
        </h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Anonymous Story Sharing:
            </strong>{' '}
            The content of your confessions is shared anonymously on our
            platform. Your identity remains protected, and your personal
            information is never disclosed to other users.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Improving User Experience:
            </strong>{' '}
            We use usage data to analyze user behavior and preferences. This
            helps us enhance the functionality and user experience of MyStory.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Communication:</strong> We
            may use your contact information to communicate with you regarding
            important updates, announcements, or changes to our Privacy Policy.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Security:</h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">Encryption:</strong> We
            use industry-standard encryption protocols to ensure the security of
            your data during transmission.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Secure Storage:</strong>{' '}
            Your personal information and confession data are stored securely on
            our servers. We implement strict access controls to prevent
            unauthorized access to your data.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Third-Party Services:
            </strong>{' '}
            We may use third-party services for analytics or communication
            purposes. These services adhere to strict privacy and security
            standards to protect your data.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Rights:</h2>
        <ol className="list-decimal ml-6 dark:text-neutral-300 text-neutral-700">
          <li className="my-2">
            <strong className="dark:text-neutral-100">
              Access and Control:
            </strong>{' '}
            You have the right to access, modify, or delete your personal
            information at any time. You can update your profile or delete your
            account through the MyStory platform.
          </li>
          <li className="my-2">
            <strong className="dark:text-neutral-100">Opt-Out:</strong> You have
            the option to opt-out of receiving promotional communications from
            us. You can manage your communication preferences in your account
            settings.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Changes to Privacy Policy:
        </h2>
        <p className="dark:text-neutral-300 text-neutral-700">
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be communicated to users through the MyStory
          platform or via email. By continuing to use our platform after the
          changes take effect, you agree to the updated Privacy Policy.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 dark:text-neutral-300 text-neutral-700">
          Contact Us:
        </h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or data
          practices, please contact us at{' '}
          <a href="mailto:contact@example.com" className="text-blue-500">
            sbhunia2903@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
