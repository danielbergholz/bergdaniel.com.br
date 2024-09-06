export function Thunder(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="rgb(var(--foreground-rgb))"
      viewBox="0 0 24 24"
      aria-label="Thunder"
      {...props}
    >
      <path d="M18.82 9.18A2 2 0 0 0 17 8h-1.81l1.33-3.26a2 2 0 0 0-.19-1.84 2.06 2.06 0 0 0-1.71-.9h-4.34a2 2 0 0 0-1.91 1.27l-3.23 8a2 2 0 0 0 .2 1.83 2.06 2.06 0 0 0 1.71.9h2.76L8 20.74a1 1 0 0 0 .5 1.15A1.1 1.1 0 0 0 9 22a1 1 0 0 0 .76-.35l8.8-10.37a2 2 0 0 0 .26-2.1" />
    </svg>
  )
}

export function GitHub(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="rgb(var(--foreground-rgb))"
      viewBox="0 0 24 24"
      aria-label="GitHub"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18A2.7 2.7 0 0 0 5 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 0 1 1.53 1 2.15 2.15 0 0 0 2.91.83 2.16 2.16 0 0 1 .63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 0 1 1-2.71 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.63 9.63 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.87 3.87 0 0 1 1 2.71c0 3.82-2.34 4.66-4.57 4.91a2.4 2.4 0 0 1 .69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 12 2" />
    </svg>
  )
}

export function DevTo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      aria-label="dev.to"
      viewBox="0 0 512 512"
      fill="rgb(var(--foreground-rgb))"
      {...props}
    >
      <rect width="512" height="512" rx="15%" />
      <path
        fill="rgb(var(--background-rgb))"
        d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41m45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"
      />
    </svg>
  )
}

export function Discord({ fill, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 24 24"
      aria-label="Discord"
      {...rest}
    >
      <path
        fill={fill || "rgb(var(--foreground-rgb))"}
        d="M18.59 5.89c-1.23-.57-2.54-.99-3.92-1.23-.17.3-.37.71-.5 1.04-1.46-.22-2.91-.22-4.34 0-.14-.33-.34-.74-.51-1.04-1.38.24-2.69.66-3.92 1.23-2.48 3.74-3.15 7.39-2.82 10.98 1.65 1.23 3.24 1.97 4.81 2.46.39-.53.73-1.1 1.03-1.69-.57-.21-1.11-.48-1.62-.79.14-.1.27-.21.4-.31 3.13 1.46 6.52 1.46 9.61 0 .13.11.26.21.4.31-.51.31-1.06.57-1.62.79.3.59.64 1.16 1.03 1.69 1.57-.49 3.17-1.23 4.81-2.46.39-4.17-.67-7.78-2.82-10.98zm-9.75 8.78c-.94 0-1.71-.87-1.71-1.94s.75-1.94 1.71-1.94 1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94m6.31 0c-.94 0-1.71-.87-1.71-1.94s.75-1.94 1.71-1.94 1.72.87 1.71 1.94c0 1.06-.75 1.94-1.71 1.94"
      />
    </svg>
  )
}

export function Email(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
      />
      <rect
        width="18"
        height="14"
        x="3"
        y="5"
        stroke="#000"
        stroke-linecap="round"
        stroke-width="2"
        rx="2"
      />
    </svg>
  )
}

export function LinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="rgb(var(--foreground-rgb))"
      data-supported-dps="24x24"
      aria-label="LinkedIn"
      {...props}
    >
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2M8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75M19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.7.7 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  )
}

export function Twitter({ fill, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 512 512"
      aria-label="X (Formerly Twitter)"
      {...rest}
    >
      <path
        fill={fill || "rgb(var(--foreground-rgb))"}
        d="M459.583 149.216c.312 4.629.312 9.258.312 13.93 0 142.347-105.665 306.515-298.88 306.515v-.085C103.939 469.661 48.049 452.895 0 421.281c8.3 1.024 16.64 1.536 25.002 1.557 47.3.043 93.248-16.233 130.46-46.204-44.95-.875-84.366-30.931-98.136-74.811a102.2 102.2 0 0 0 47.424-1.855c-49.005-10.154-84.262-54.311-84.262-105.592v-1.366c14.602 8.341 30.951 12.97 47.675 13.482-46.156-31.635-60.384-94.606-32.511-143.84 53.332 67.302 132.019 108.216 216.49 112.546-8.466-37.416 3.099-76.623 30.389-102.925 42.308-40.786 108.848-38.696 148.618 4.671 23.525-4.757 46.073-13.61 66.707-26.152-7.842 24.936-24.253 46.119-46.177 59.579A204.9 204.9 0 0 0 512 93.413c-14.103 21.673-31.866 40.551-52.417 55.803"
      />
    </svg>
  )
}

export function YouTube({ fill, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 512 512"
      aria-label="YouTube"
      {...rest}
    >
      <path
        fill={fill || "rgb(var(--foreground-rgb))"}
        fillRule="evenodd"
        d="M256.971 106.668c12.12.02 134.11.444 165.706 8.901 18.368 4.876 32.811 19.29 37.739 37.731 8.56 31.948 8.903 97.107 8.917 102.268v.653c-.014 5.177-.356 70.53-8.917 102.479-4.928 18.441-19.37 32.855-37.739 37.73-32.593 8.725-161.38 8.9-166.519 8.903h-.316c-5.14-.003-133.948-.178-166.562-8.902-18.347-4.876-32.81-19.29-37.717-37.731-8.54-31.948-8.882-97.302-8.896-102.479v-.653c.014-5.161.356-70.32 8.896-102.268 4.906-18.441 19.37-32.855 37.717-37.73 31.616-8.458 153.626-8.881 165.748-8.902Zm-44.619 86.27v126.123l111.53-63.167z"
      />
    </svg>
  )
}
