/*
  EDIT THIS FILE to personalize the portfolio.
  Keep exactly four project objects if you want the intended four-project layout.
*/

window.PORTFOLIO_DATA = {
  person: {
    name: "Marko Jevtic",
    role: "4th Computer Engineering Student",
    headline: "Marko Jevtic",
    summary: "Hardware Design Personal Project Portfolio",
    photo: "assets/images/marko-jevtic-profile.webp",
    photoAlt: "Professional portrait of Marko Jevtic",
    availability: "Hardware Design Personal Project Portfolio",
    email: "your-email@example.com",
    github: "https://github.com/Marko411",
    facts: [
      { value: "Four", label: "Personal projects" },
      { value: "Hardware Design", label: "Primary focus" },
      { value: "Computer Engineering", label: "Field of study" }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Marko411" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
      { label: "Email", url: "mailto:your-email@example.com" }
    ]
  },

  projects: [
    {
      title: "RP2350A Development Board",
      tagline: "",
      description: "RP2350A microcontroller interfaced with the W25Q128JVS 16 MB external flash and ABM8-272-T3 12MHz oscillator for storage and timing.\n\nBuilt-in Indicator LED connected to GPIO0, GPIO pins 1-29 broken out alongside 3V3 and GND signals using two 16-pin connectors. ",
      technologies: ["RP2350A", "PCB Design", "Microcontroller Interfacing"],
      github: "https://github.com/Marko411/RP2350A-Development-Board",
      liveUrl: "",
      images: [
        "assets/images/rp2350a-01-render.png",
        "assets/images/rp2350a-02-wall.webp",
        "assets/images/rp2350a-03-hand.webp",
        "assets/images/rp2350a-04-layers.png"
      ],
      video: "assets/videos/rp2350a-development-board.mp4",
      videoPoster: "assets/images/rp2350a-video-poster.jpg"
    },
    {
      title: "RP2354A Minima Board Family",
      tagline: "",
      description: "WIP",
      technologies: ["RP2354A", "Built-In Flash MCU Interfacing", "PCB Miniaturization"],
      github: "https://github.com/Marko411/RP2354A-Minima",
      liveUrl: "",
      images: [
        "assets/images/rp2354a-minima-01-render.png",
        "assets/images/rp2354a-minima-02.webp",
        "assets/images/rp2354a-minima-03.webp",
        "assets/images/rp2354a-minima-04-ribbon.webp"
      ],
      video: "assets/videos/project-placeholder.mp4",
      videoPoster: "assets/images/project-placeholder.webp"
    },
    {
      title: "HDMI to CSI Adapter",
      tagline: "",
      description: "WIP",
      technologies: ["Capture Card Design", "High-Speed Serial PCB Design", "HDMI & MIPI (CSI) Interfaces"],
      github: "https://github.com/Marko411/HDMI_To_CSI_Adapter",
      liveUrl: "",
      images: [
        "assets/images/hdmi-csi-adapter-04-render.png",
        "assets/images/hdmi-csi-adapter-02.webp",
        "assets/images/hdmi-csi-adapter-03.webp",
        "assets/images/project-placeholder.webp"
      ],
      video: "assets/videos/project-placeholder.mp4",
      videoPoster: "assets/images/project-placeholder.webp"
    },
    {
      title: "Linux Mini PC",
      tagline: "",
      description: "WIP",
      technologies: ["High-speed Serial SoM Carrier Design", "USB-3.0 Interface", "MIPI (CSI + DSI) Interfaces"],
      github: "https://github.com/Marko411/Linux-Mini-PC",
      liveUrl: "",
      images: [
        "assets/images/linux-mini-pc-01-render.jpg",
        "assets/images/linux-mini-pc-02-assembled.webp",
        "assets/images/linux-mini-pc-03-bare.webp",
        "assets/images/project-placeholder.webp"
      ],
      video: "assets/videos/project-placeholder.mp4",
      videoPoster: "assets/images/project-placeholder.webp"
    }
  ]
};
