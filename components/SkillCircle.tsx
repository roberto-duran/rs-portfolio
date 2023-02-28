
type Props = {
    title: string;
    percentage: number;
}
export default function SkillCircle({ title, percentage }: Props) {
    return (
      <div className="circle-progress relative p-3 pb-0 text-center md:p-5 md:pb-5">
          <div className="relative mb-2 inline-block text-primary">
              <svg className="circle" width="100" height="100" viewBox="0 0 120 120">
                  <circle className="circle-bg" cx="60" cy="60" r="54"
                          pathLength="1" strokeDasharray="round"
                          strokeWidth="12"></circle>
                  <circle cx="60" cy="60" r="54" strokeWidth="12"
                          opacity="1" pathLength="1" strokeDashoffset="0px"
                          strokeDasharray={`0.${percentage}px 1px`}></circle>
              </svg>
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2
                    -translate-x-1/2 transform text-center text-xl text-body">
                        {percentage}%
                    </span>
          </div>
          <h5>{title}</h5>
      </div>
    );
};
