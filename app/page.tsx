import { getMeetings } from '@/lib/actions';
import { Meeting } from '@/lib/types';
import MeetingCard from './MeetingCard';

export default async function CalendarPage() {
  const meetings: Meeting[] = await getMeetings();

  return (
    <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
      <h1>Upcoming Meetings</h1>
      <ul>
        {meetings.map((meeting) => (
          <MeetingCard key={meeting._id} meeting={meeting} />
        ))}
      </ul>
    </div>
  );
}
