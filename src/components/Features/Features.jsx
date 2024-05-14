import Seamless from './Seamless';
import PrivacyMatters from './PrivacyMatters';
import ShareEasily from './ShareEasily';
import { TracingBeam } from '@/components/ui/tracing-beam';
export default function Features() {
  return (
    <div>
      <TracingBeam>
        <Seamless />
        <PrivacyMatters />
        <ShareEasily />
      </TracingBeam>
    </div>
  );
}
