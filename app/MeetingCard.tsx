import { Meeting } from "@/lib/actions"
import Host from "./HostBio";

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:px-6">
        {/* Content goes here */}
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        {meeting.title}
      </div>
      <div className="px-4 py-5 sm:p-6">{meeting.description}</div>
      <Host {...meeting.host} />
    </div>
  )
}
