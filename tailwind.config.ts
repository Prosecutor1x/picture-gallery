import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'pic1': "url('https://cdn.discordapp.com/attachments/843621691350319145/1311109584831643759/FiveM_b2802_GTAProcess_2024-11-27_04-06-44.png?ex=6747a974&is=674657f4&hm=1d0f0d528fe960eb9261dd52ad19a238fe1be22aef368b47913d3d71cc08e950&')",
        'pic2': "url('https://cdn.discordapp.com/attachments/843621691350319145/1311106888389103656/FiveM_b2802_GTAProcess_2024-11-27_03-20-28.png?ex=6747a6f1&is=67465571&hm=bf68b085dcf14ed8c30d2e22116738768f88a2c2a983b0d5dca449f830cb7415&')",
      }
    },
  },
  plugins: [],
} satisfies Config;
