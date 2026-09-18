window.PORTFOLIO_DATA = {
  person: {
    name: "Marko Jevtic",
    role: "4th Year Computer Engineering Student",
    headline: "Marko Jevtic",
    summary: "Hardware Design Personal Project Portfolio",
    photo: "assets/images/marko-jevtic-profile.webp",
    photoAlt: "Professional portrait of Marko Jevtic",
    availability: "Hardware Design Personal Project Portfolio",
    email: "mjevtic@uoguelph.ca",
    github: "https://github.com/Marko411",
    linkedin: "https://www.linkedin.com/in/marko-jevtic-904b7b344",
    resume: "assets/documents/marko-jevtic-resume.pdf",
    links: [
      { label: "GitHub", url: "https://github.com/Marko411" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/marko-jevtic-904b7b344" },
      { label: "Email", url: "mailto:mjevtic@uoguelph.ca" }
    ]
  },
  projects: [
    {
      title: "Linux Mini PC",
      tagline: "",
      description: "This project's motherboard is an 4-layer SoM carrier designed for the CM5 (Pi Compute Module 5) with CSI, DSI (Camera/Display Serial Interfaces) and USB-3.0 high-speed interfaces. The board also contains an SD card slot for external storage and uses the TI BQ25895 as the charge management chip, allowing USB-C power to recharge the Mini PC's LiPo battery. The enclosure was designed using SolidWorks and was 3D printed.",
      technologies: ["SoM Carrier Design", "Rechargeable Power System Design", "High-speed Serial USB-3.0 and MIPI Interfaces"],
      github: "https://github.com/Marko411/Linux-Mini-PC",
      liveUrl: "",
      media: [
        { type: "image", src: "assets/images/linux-mini-pc-01-render.jpg" },
        { type: "video", src: "assets/videos/linux-mini-pc-demo.mp4", poster: "assets/images/linux-mini-pc-video-poster.jpg" },
        { type: "image", src: "assets/images/linux-mini-pc-02-assembled.webp" },
        { type: "image", src: "assets/images/linux-mini-pc-04-enclosure.webp" }
      ]
    },
    {
      title: "HDMI to CSI Adapter",
      tagline: "",
      description: "4-Layer board featuring the Toshiba TC358743XBG serving as an HDMI to CSI2 bridge, allowing HDMI signals to be captured and streamed to CSI (Camera Serial Interface) inputs on Linux machines. The TC358743XBG is interfaced with HDMI and CSI connectors, with the high-speed signals being impedance matched accordingly and all of the signals containing ESD protection.",
      technologies: ["Capture Card Design", "ESD Protection Design", "High-Speed Serial HDMI & MIPI (CSI) Interfaces"],
      github: "https://github.com/Marko411/HDMI_To_CSI_Adapter",
      liveUrl: "",
      media: [
        { type: "image", src: "assets/images/hdmi-csi-adapter-04-render.png" },
        { type: "video", src: "assets/videos/hdmi-csi-adapter-demo.mp4", poster: "assets/images/hdmi-csi-adapter-video-poster.jpg" },
        { type: "image", src: "assets/images/hdmi-csi-adapter-05.webp" },
        { type: "image", src: "assets/images/hdmi-csi-adapter-02.webp" }
      ]
    },
    {
      title: "RP2354A Minima",
      tagline: "",
      description: "Miniature 4-layer version of my development board project featuring the RP2354A, the built-in flash version of the RP2350, interfaced with an ABM8-272-T3 12MHz oscillator for timing and an LED on GPIO0 for indication. Connects to a GPIO expansion board using an FPC cable which breaks out GPIO 0-29 signals and 3V3, 5V and GND rails. ",
      technologies: ["RP2354A", "Built-In Flash MCU Interfacing", "PCB Miniaturization"],
      github: "https://github.com/Marko411/RP2354A-Minima",
      liveUrl: "",
      media: [
        { type: "image", src: "assets/images/rp2354a-minima-01-render.png" },
        { type: "video", src: "assets/videos/rp2354a-minima-demo.mp4", poster: "assets/images/rp2354a-minima-video-poster.jpg" },
        { type: "image", src: "assets/images/rp2354a-minima-03.webp" },
        { type: "image", src: "assets/images/rp2354a-minima-04-ribbon.webp" }
      ]
    },
    {
      title: "RP2350A Dev Board",
      tagline: "",
      description: "2-Layer board designed in Altium Designer 25 and assembled using JLCPCB services\n\nRP2350A microcontroller interfaced with the W25Q128JVS 16 MB external flash and ABM8-272-T3 12MHz oscillator for storage and timing.\n\nBuilt-in Indicator LED connected to GPIO0, GPIO pins 1-29 broken out alongside 3V3 and GND signals using two 16-pin connectors. ",
      technologies: ["RP2350A", "PCB Design", "Microcontroller Interfacing"],
      github: "https://github.com/Marko411/RP2350A-Development-Board",
      liveUrl: "",
      mediaScale: 0.8,
      media: [
        { type: "image", src: "assets/images/rp2350a-01-render.png" },
        { type: "video", src: "assets/videos/rp2350a-development-board.mp4", poster: "assets/images/rp2350a-video-poster.jpg" },
        { type: "image", src: "assets/images/rp2350a-02-wall.webp" },
        { type: "image", src: "assets/images/rp2350a-03-hand.webp" }
      ]
    }
  ]
};
