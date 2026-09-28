import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Phosphor({ children, title, ...props }: IconProps & { children: ReactNode }) {
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

function stroke(width: number) {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: width,
  };
}

export function IconUserCheck(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="128" cy="120" r="40" {...stroke(16)} />
      <path d="M63.8,199.37a72,72,0,0,1,128.4,0" {...stroke(16)} />
      <path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" {...stroke(16)} />
      <polyline points="184 56 200 72 232 40" {...stroke(16)} />
    </Phosphor>
  );
}

export function IconHouse(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
        {...stroke(16)}
      />
    </Phosphor>
  );
}

export function IconHouseBold(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconHouseLine(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="16" y1="216" x2="240" y2="216" {...stroke(24)} />
      <polyline points="152 216 152 152 104 152 104 216" {...stroke(24)} />
      <line x1="40" y1="116.69" x2="40" y2="216" {...stroke(24)} />
      <line x1="216" y1="216" x2="216" y2="116.69" {...stroke(24)} />
      <path
        d="M24,132.69l98.34-98.35a8,8,0,0,1,11.32,0L232,132.69"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconCertificate(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="72" y1="136" x2="120" y2="136" {...stroke(16)} />
      <line x1="72" y1="104" x2="120" y2="104" {...stroke(16)} />
      <circle cx="196" cy="124" r="44" {...stroke(16)} />
      <path
        d="M168,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V90.06"
        {...stroke(16)}
      />
      <polyline points="168 157.94 168 224 196 208 224 224 224 157.94" {...stroke(16)} />
    </Phosphor>
  );
}

export function IconCertificateBold(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="72" y1="140" x2="116" y2="140" {...stroke(24)} />
      <line x1="72" y1="100" x2="116" y2="100" {...stroke(24)} />
      <circle cx="196" cy="128" r="44" {...stroke(24)} />
      <polyline points="168 161.94 168 228 196 212 224 228 224 161.94" {...stroke(24)} />
      <path
        d="M168,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V94.06"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
        {...stroke(16)}
      />
      <polyline points="88 136 112 160 168 104" {...stroke(16)} />
    </Phosphor>
  );
}

export function IconShieldCheckBold(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
        {...stroke(24)}
      />
      <polyline points="88 136 112 160 168 104" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconKey(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="180" cy="76" r="16" fill="currentColor" />
      <path
        d="M93.17,122.83A71.68,71.68,0,0,1,88,95.91c0-38.58,31.08-70.64,69.64-71.87A72,72,0,0,1,232,98.36C230.73,136.92,198.67,168,160.09,168a71.68,71.68,0,0,1-26.92-5.17h0L120,176H96v24H72v24H40a8,8,0,0,1-8-8V187.31a8,8,0,0,1,2.34-5.65l58.83-58.83Z"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconArrowsClockwise(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="200 88 224 64 200 40" {...stroke(24)} />
      <path d="M32,128A64,64,0,0,1,96,64H224" {...stroke(24)} />
      <polyline points="56 168 32 192 56 216" {...stroke(24)} />
      <path d="M224,128a64,64,0,0,1-64,64H32" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconHammer(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="76.68 72.63 128 56 179.32 72.63" {...stroke(24)} />
      <path
        d="M38.37,62.42,12.85,113.48a8,8,0,0,0,3.57,10.73L44,138,76.68,72.63,49.11,58.85A8,8,0,0,0,38.37,62.42Z"
        {...stroke(24)}
      />
      <path
        d="M212,138l27.58-13.79a8,8,0,0,0,3.57-10.73L217.63,62.42a8,8,0,0,0-10.74-3.57L179.32,72.63Z"
        {...stroke(24)}
      />
      <path
        d="M177.36,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120l36,34,16-16"
        {...stroke(24)}
      />
      <polyline points="196 154 158 192 96 176 44 138" {...stroke(24)} />
      <polyline points="106.93 216 80.33 209.13 56 191.36" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="88 136 112 160 168 104" {...stroke(24)} />
      <circle cx="128" cy="128" r="96" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="128" cy="140" r="84" {...stroke(24)} />
      <line x1="128" y1="136" x2="156" y2="108" {...stroke(24)} />
      <line x1="104" y1="16" x2="152" y2="16" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="128" cy="104" r="32" {...stroke(24)} />
      <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconTrendUp(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="232 56 136 152 96 112 24 184" {...stroke(24)} />
      <polyline points="232 120 232 56 168 56" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconChartLine(props: IconProps) {
  return (
    <Phosphor {...props}>
      <polyline points="224 208 32 208 32 48" {...stroke(24)} />
      <polyline points="200 72 128 144 96 112 32 176" {...stroke(24)} />
      <polyline points="200 112 200 72 160 72" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconChartPie(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M32.42,137q-.42-4.44-.42-9A95.93,95.93,0,0,1,88,40.74v65.41Z"
        {...stroke(24)}
      />
      <path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconUsersThree(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="128" cy="144" r="40" {...stroke(24)} />
      <path d="M72,216a65,65,0,0,1,112,0" {...stroke(24)} />
      <path
        d="M164,72.55a32,32,0,1,1,39.63,45.28c14.33,3.1,27.89,14.84,36.4,26.17"
        {...stroke(24)}
      />
      <path
        d="M16,144c8.51-11.33,22.06-23.07,36.4-26.17A32,32,0,1,1,92,72.55"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconSealPercent(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
        {...stroke(24)}
      />
      <circle cx="96" cy="96" r="16" fill="currentColor" />
      <circle cx="160" cy="160" r="16" fill="currentColor" />
      <line x1="88" y1="168" x2="168" y2="88" {...stroke(24)} />
    </Phosphor>
  );
}

/** Lower-deposit card icon from the live site (Phosphor car, bold). */
export function IconCar(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="184" cy="120" r="16" fill="currentColor" />
      <line x1="116" y1="76" x2="156" y2="76" {...stroke(24)} />
      <line x1="220" y1="40" x2="148" y2="40" {...stroke(24)} />
      <path d="M12,144a24,24,0,0,1,24-24" {...stroke(24)} />
      <path
        d="M224.34,96H228a16,16,0,0,1,16,16v32a16,16,0,0,1-16,16h-8l-18.1,50.69a8,8,0,0,1-7.54,5.31H181.64a8,8,0,0,1-7.54-5.31L170.29,200H101.71L97.9,210.69A8,8,0,0,1,90.36,216H77.64a8,8,0,0,1-7.54-5.31L57,174a79.7,79.7,0,0,1-21-54h0a80,80,0,0,1,80-80h32a80,80,0,0,1,73.44,48.22,82.22,82.22,0,0,1,2.9,7.78"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="204" cy="84" r="28" {...stroke(12)} />
      <path
        d="M48,208H16a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48"
        {...stroke(12)}
      />
      <path
        d="M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z"
        {...stroke(12)}
      />
      <path d="M176,85.29A28,28,0,1,1,192,58.71" {...stroke(12)} />
    </Phosphor>
  );
}

export function IconCoins(props: IconProps) {
  return (
    <Phosphor {...props}>
      <ellipse cx="96" cy="84" rx="80" ry="36" {...stroke(12)} />
      <path d="M16,84v40c0,19.88,35.82,36,80,36s80-16.12,80-36V84" {...stroke(12)} />
      <line x1="64" y1="117" x2="64" y2="157" {...stroke(12)} />
      <path
        d="M176,96.72c36.52,3.34,64,17.86,64,35.28,0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44"
        {...stroke(12)}
      />
      <path d="M80,159.28V172c0,19.88,35.82,36,80,36s80-16.12,80-36V132" {...stroke(12)} />
      <line x1="192" y1="165" x2="192" y2="205" {...stroke(12)} />
      <line x1="128" y1="117" x2="128" y2="205" {...stroke(12)} />
    </Phosphor>
  );
}

export function IconCoinsBold(props: IconProps) {
  return (
    <Phosphor {...props}>
      <ellipse cx="96" cy="84" rx="80" ry="36" {...stroke(24)} />
      <path d="M16,84v40c0,19.88,35.82,36,80,36s80-16.12,80-36V84" {...stroke(24)} />
      <line x1="64" y1="117" x2="64" y2="157" {...stroke(24)} />
      <path
        d="M176,96.72c36.52,3.34,64,17.86,64,35.28,0,19.88-35.82,36-80,36-19.6,0-37.56-3.17-51.47-8.44"
        {...stroke(24)}
      />
      <path d="M80,159.28V172c0,19.88,35.82,36,80,36s80-16.12,80-36V132" {...stroke(24)} />
      <line x1="192" y1="165" x2="192" y2="205" {...stroke(24)} />
      <line x1="128" y1="117" x2="128" y2="205" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconThumbsUp(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z"
        {...stroke(12)}
      />
      <path
        d="M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80"
        {...stroke(12)}
      />
    </Phosphor>
  );
}

export function IconUserSwitch(props: IconProps) {
  return (
    <Phosphor {...props}>
      <circle cx="128" cy="120" r="40" {...stroke(12)} />
      <path d="M63.8,199.37a72,72,0,0,1,128.4,0" {...stroke(12)} />
      <polyline points="200 128 224 152 248 128" {...stroke(12)} />
      <polyline points="8 128 32 104 56 128" {...stroke(12)} />
      <path d="M32,104v24a96,96,0,0,0,174,56" {...stroke(12)} />
      <path d="M224,152V128A96,96,0,0,0,50,72" {...stroke(12)} />
    </Phosphor>
  );
}

export function IconEnvelope(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
        {...stroke(24)}
      />
      <polyline points="224 56 128 144 32 56" {...stroke(24)} />
    </Phosphor>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Phosphor {...props}>
      <path
        d="M164.39,145.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z"
        {...stroke(24)}
      />
    </Phosphor>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Phosphor {...props}>
      <line x1="40" y1="128" x2="216" y2="128" {...stroke(16)} />
      <polyline points="144 56 216 128 144 200" {...stroke(16)} />
    </Phosphor>
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

export function IconPlus(props: IconProps) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
        fill="currentColor"
      />
    </svg>
  );
}
