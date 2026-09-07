import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Phosphor({ children, title, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <rect width="256" height="256" fill="none" />
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 16,
};

export function IconUserCheck(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="128" cy="120" r="40" {...stroke} />
      <path d="M63.8,199.37a72,72,0,0,1,128.4,0" {...stroke} />
      <path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" {...stroke} />
      <polyline points="184 56 200 72 232 40" {...stroke} />
    </Phosphor>
  );
}

export function IconHouse(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
        {...stroke}
      />
    </Phosphor>
  );
}

export function IconCertificate(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="72" y1="136" x2="120" y2="136" {...stroke} />
      <line x1="72" y1="104" x2="120" y2="104" {...stroke} />
      <circle cx="196" cy="124" r="44" {...stroke} />
      <path d="M168,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V90.06" {...stroke} />
      <polyline points="168 157.94 168 224 196 208 224 224 224 157.94" {...stroke} />
    </Phosphor>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
        {...stroke}
      />
      <polyline points="88 136 112 160 168 104" {...stroke} />
    </Phosphor>
  );
}

export function IconKey(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="180" cy="76" r="16" fill="currentColor" />
      <path
        d="M93.17,122.83A71.68,71.68,0,0,1,88,95.91c0-38.58,31.08-70.64,69.64-71.87A72,72,0,0,1,232,98.36C230.73,136.92,198.67,168,160.09,168a71.68,71.68,0,0,1-26.92-5.17h0L120,176H96v24H72v24H40a8,8,0,0,1-8-8V187.31a8,8,0,0,1,2.34-5.65l58.83-58.83Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Phosphor>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline
        points="88 136 112 160 168 104"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <circle
        cx="128"
        cy="128"
        r="96"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Phosphor>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle
        cx="128"
        cy="140"
        r="84"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <line
        x1="128"
        y1="136"
        x2="156"
        y2="108"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <line
        x1="104"
        y1="16"
        x2="152"
        y2="16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Phosphor>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle
        cx="128"
        cy="104"
        r="32"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Phosphor>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <rect width="256" height="256" fill="none" />
      <line x1="40" y1="128" x2="216" y2="128" {...stroke} />
      <polyline points="144 56 216 128 144 200" {...stroke} />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function IconEnvelope(props: IconProps) {
  return (
    <Phosphor {...props}>
      <rect x="32" y="56" width="192" height="144" rx="8" {...stroke} />
      <path d="M32 72l96 72 96-72" {...stroke} />
    </Phosphor>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M222.37,158.46l-47.11-21.11a8,8,0,0,0-8.12,1.22l-21.16,16.87a56.18,56.18,0,0,1-27.4-27.4L151.43,107a8,8,0,0,0,1.22-8.12L131.54,51.63A8,8,0,0,0,123.18,48,48.2,48.2,0,0,0,80,96c0,79.4,64.6,144,144,144a48.2,48.2,0,0,0,48-43.18A8,8,0,0,0,222.37,158.46Z"
        {...stroke}
      />
    </Phosphor>
  );
}

export function IconRepeat(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="200 88 224 64 200 40" {...stroke} />
      <path d="M32,128A96,96,0,0,1,190.65,72" {...stroke} />
      <polyline points="56 168 32 192 56 216" {...stroke} />
      <path d="M224,128a96,96,0,0,1-158.65,56" {...stroke} />
    </Phosphor>
  );
}

export function IconBuildings(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path d="M216,216V115.52a8,8,0,0,0-2.6-5.89l-80-72.73a8,8,0,0,0-10.8,0l-80,72.73A8,8,0,0,0,40,115.52V216" {...stroke} />
      <line x1="16" y1="216" x2="240" y2="216" {...stroke} />
      <path d="M152,216V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v56" {...stroke} />
      <line x1="96" y1="112" x2="96" y2="128" {...stroke} />
      <line x1="128" y1="112" x2="128" y2="128" {...stroke} />
      <line x1="160" y1="112" x2="160" y2="128" {...stroke} />
    </Phosphor>
  );
}

export function IconHammer(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="144" y1="82" x2="104" y2="122" {...stroke} />
      <line x1="104" y1="82" x2="144" y2="122" {...stroke} />
      <path d="M112,208,16,112,80,48l40,40,56-56,56,56Z" {...stroke} />
    </Phosphor>
  );
}

export function IconWallet(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path d="M40,56H216a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V56A0,0,0,0,1,40,56Z" {...stroke} />
      <path d="M40,56a16,16,0,0,1,16-16H180" {...stroke} />
      <circle cx="180" cy="140" r="12" fill="currentColor" />
      <path d="M216,112h-28a20,20,0,0,0,0,40h28" {...stroke} />
    </Phosphor>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="88" cy="108" r="32" {...stroke} />
      <path d="M24,200a64,64,0,0,1,128,0" {...stroke} />
      <circle cx="176" cy="108" r="32" {...stroke} />
      <path d="M152,200a64,64,0,0,1,80,0" {...stroke} />
    </Phosphor>
  );
}

export function IconTrendUp(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="232 56 136 152 96 112 24 184" {...stroke} />
      <polyline points="232 120 232 56 168 56" {...stroke} />
    </Phosphor>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z" {...stroke} />
      <line x1="64" y1="192" x2="136" y2="120" {...stroke} />
    </Phosphor>
  );
}

export function IconPercent(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="200" y1="56" x2="56" y2="200" {...stroke} />
      <circle cx="76" cy="76" r="28" {...stroke} />
      <circle cx="180" cy="180" r="28" {...stroke} />
    </Phosphor>
  );
}

export function IconLock(props: IconProps) {
  return (
    <Phosphor {...props}>
      <rect x="40" y="88" width="176" height="128" rx="8" {...stroke} />
      <path d="M88,88V56a40,40,0,0,1,80,0V88" {...stroke} />
    </Phosphor>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path d="M76,140l36,36c20,20,52,12,68-4l44-44" {...stroke} />
      <path d="M180,116l-36-36c-20-20-52-12-68,4L32,128" {...stroke} />
      <path d="M96,160l24,8 20-20" {...stroke} />
    </Phosphor>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <Phosphor {...props}>
      <rect x="32" y="48" width="192" height="176" rx="8" {...stroke} />
      <line x1="32" y1="96" x2="224" y2="96" {...stroke} />
      <line x1="80" y1="24" x2="80" y2="56" {...stroke} />
      <line x1="176" y1="24" x2="176" y2="56" {...stroke} />
    </Phosphor>
  );
}

export function IconBank(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polygon points="24 80 128 32 232 80 24 80" {...stroke} />
      <line x1="56" y1="80" x2="56" y2="176" {...stroke} />
      <line x1="104" y1="80" x2="104" y2="176" {...stroke} />
      <line x1="152" y1="80" x2="152" y2="176" {...stroke} />
      <line x1="200" y1="80" x2="200" y2="176" {...stroke} />
      <line x1="32" y1="176" x2="224" y2="176" {...stroke} />
      <line x1="16" y1="216" x2="240" y2="216" {...stroke} />
    </Phosphor>
  );
}

export function IconCoins(props: IconProps) {
  return (
    <Phosphor {...props}>
      <ellipse cx="96" cy="84" rx="64" ry="28" {...stroke} />
      <path d="M32,84v40c0,15.46,28.65,28,64,28s64-12.54,64-28V84" {...stroke} />
      <path d="M32,124v40c0,15.46,28.65,28,64,28s64-12.54,64-28V124" {...stroke} />
      <path d="M160,97.22c31.7,3.76,56,15.26,56,30.78v40c0,15.46-28.65,28-64,28-14.45,0-27.84-2.2-38.31-5.92" {...stroke} />
    </Phosphor>
  );
}
