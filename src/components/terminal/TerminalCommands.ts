
interface Command {
  description: string;
  action: () => string[];
}

export const createTerminalCommands = (
  handleNavigation: (section: string) => void,
  setHistory: React.Dispatch<React.SetStateAction<string[]>>
): Record<string, Command> => {
  return {
    help: {
      description: 'Show available commands',
      action: () => [
        '╭─ Available Commands:',
        '├─ help          - Show this help menu',
        '├─ ls            - List all portfolio sections', 
        '├─ about         - About me section',
        '├─ education     - Educational background',
        '├─ experience    - Work experience',
        '├─ certifications- My certifications',
        '├─ skills        - Technical skills',
        '├─ projects      - Portfolio projects',
        '├─ contact       - Contact information',
        '├─ portfolio     - View complete portfolio',
        '├─ clear         - Clear terminal',
        '├─ gui           - Switch to GUI mode',
        '╰─ exit          - Close terminal',
        ''
      ]
    },
    ls: {
      description: 'List portfolio sections',
      action: () => [
        '📁 Portfolio Sections:',
        '├── 👋 about',
        '├── 🎓 education', 
        '├── 💼 experience',
        '├── 🏆 certifications',
        '├── ⚡ skills',
        '├── 🚀 projects',
        '├── 📧 contact',
        '└── 📋 portfolio (complete view)',
        ''
      ]
    },
    portfolio: {
      description: 'View complete portfolio',
      action: () => {
        handleNavigation('portfolio');
        return ['Loading complete portfolio...', ''];
      }
    },
    about: {
      description: 'View about section',
      action: () => {
        handleNavigation('about');
        return ['Loading about section...', ''];
      }
    },
    education: {
      description: 'View education section',
      action: () => {
        handleNavigation('education');
        return ['Loading education section...', ''];
      }
    },
    experience: {
      description: 'View experience section',
      action: () => {
        handleNavigation('experience');
        return ['Loading experience section...', ''];
      }
    },
    certifications: {
      description: 'View certifications',
      action: () => {
        handleNavigation('certifications');
        return ['Loading certifications...', ''];
      }
    },
    skills: {
      description: 'View technical skills',
      action: () => {
        handleNavigation('skills');
        return ['Loading skills section...', ''];
      }
    },
    projects: {
      description: 'View portfolio projects',
      action: () => {
        handleNavigation('projects');
        return ['Loading projects...', ''];
      }
    },
    contact: {
      description: 'View contact information',
      action: () => {
        handleNavigation('contact');
        return ['Loading contact section...', ''];
      }
    },
    clear: {
      description: 'Clear terminal screen',
      action: () => {
        setHistory([]);
        return [];
      }
    },
    gui: {
      description: 'Switch to GUI mode',
      action: () => {
        handleNavigation('portfolio');
        return ['Switching to GUI mode...', ''];
      }
    },
    exit: {
      description: 'Close terminal',
      action: () => {
        handleNavigation('portfolio');
        return ['Terminal session ended.', ''];
      }
    }
  };
};
