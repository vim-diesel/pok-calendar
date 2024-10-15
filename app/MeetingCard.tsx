import { Meeting } from "@/lib/types";
import Host from "./HostBio";
import { ParsedDescription } from "./ParsedDescription";

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  return (
    <div className="m-6 rounded-lg border-2 bg-white shadow dark:bg-slate-800">
      <div className="border-b-2 px-4 py-5 text-lg sm:px-6">
        {/* We use less vertical padding on card headers on desktop than on body sections */}
        {meeting.title}
      </div>
      <div className="max-h-64 overflow-auto bg-slate-100 px-4 py-5 font-mono italic sm:p-6 dark:bg-slate-700">
        <ParsedDescription description={meeting.description} />
      </div>
      {meeting.host && <Host {...meeting.host} />}
    </div>
  );
}
