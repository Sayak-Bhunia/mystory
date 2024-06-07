import { HiShieldCheck } from 'react-icons/hi';
import { MdCancel, MdAnalytics } from 'react-icons/md';
const data = [
  {
    icon: <HiShieldCheck />,
    heading: 'Are the Stories Protected?',
    detail:
      'Yes, MyStory doesnt reveal the user detail publicly making it a full fledged place for expression and connection',
  },
  {
    icon: <MdAnalytics />,
    heading: 'How to Contribute as a Developer?',
    detail:
      'MyStory is an opensource lead and welcome developer across the world. You can find more in its github repository and under readme file for more details',
  },
  {
    icon: <MdCancel />,
    heading: 'Is it safe for all to use MyStory?',
    detail:
      "Yes, MyStory doesn't allow vulgar words, hate speech and if any individual found breaking the community guidelines, it might lead to account suspension.",
  },
];
export default data;
