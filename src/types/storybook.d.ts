declare module '@storybook/react-vite' {
  export interface StorybookConfig {
    stories: string[];
    addons: (string | { name: string; options?: any })[];
    framework: {
      name: string;
      options: any;
    };
    [key: string]: any;
  }
} 