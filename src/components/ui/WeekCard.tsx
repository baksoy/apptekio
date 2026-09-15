import { Check, Clock, Inbox, PenLine } from 'lucide-react';

const items = [
  {
    title: 'Overnight inquiries answered',
    meta: 'Inbox helper · 9 drafts ready before open',
    status: 'approved' as const,
  },
  {
    title: 'Three quiet follow-ups nudged',
    meta: 'Follow-up helper · drafts waiting on you',
    status: 'review' as const,
  },
  {
    title: 'Thursday visits on the calendar',
    meta: 'Scheduling helper · booked and confirmed',
    status: 'approved' as const,
  },
  {
    title: 'Weekly customer note',
    meta: 'Waiting on your one-line update',
    status: 'waiting' as const,
  },
];

const statusStyles = {
  approved: { label: 'Approved', className: 'bg-moss-100 text-moss-700', icon: Check },
  review: { label: 'Needs a look', className: 'bg-clay-100 text-clay-600', icon: PenLine },
  waiting: { label: 'On hold', className: 'bg-paper-deep text-ink-muted', icon: Clock },
};

export default function WeekCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-[1.6rem] bg-ink/5 blur-xl"
      />
      <div className="rounded-xl2 border border-ink/10 bg-paper-soft/95 p-5 shadow-lift backdrop-blur sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-paper-soft">
              <Inbox className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">This week, handled</p>
              <p className="text-xs text-ink-muted">Your week at a glance · Mon–Fri</p>
            </div>
          </div>
          <span className="rounded-full bg-moss-100 px-2.5 py-1 text-xs font-semibold text-moss-700">
            On track
          </span>
        </div>

        <ul className="mt-5 space-y-2.5">
          {items.map((item) => {
            const s = statusStyles[item.status];
            const Icon = s.icon;
            return (
              <li
                key={item.title}
                className="flex items-center justify-between gap-3 rounded-xl border border-ink/10 bg-paper px-3.5 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{item.title}</p>
                  <p className="truncate text-xs text-ink-muted">{item.meta}</p>
                </div>
                <span
                  className={`inline-flex flex-none items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${s.className}`}
                >
                  <Icon className="h-3 w-3" />
                  {s.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-paper-soft">
          <span className="text-sm font-medium">Every send waits for your OK.</span>
          <span className="text-xs text-moss-200">2 awaiting approval</span>
        </div>
      </div>
    </div>
  );
}
