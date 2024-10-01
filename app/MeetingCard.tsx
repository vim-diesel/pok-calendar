import { Meeting } from '@/lib/actions';
import Host from './HostBio';
import { ParsedDescription } from './ParsedDescription';

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <div className='m-6 border-2 rounded-lg bg-white shadow'>
      <div className='px-4 py-5 sm:px-6 border-b-2'>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        {meeting.title}
      </div>
      <div className='bg-slate-100 font-mono italic px-4 py-5 sm:p-6 max-h-64 overflow-auto'>
        <ParsedDescription description={meeting.description} />
      </div>
      {meeting.host && <Host {...meeting.host} />}
    </div>
  );
}
