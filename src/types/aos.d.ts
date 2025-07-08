
declare module 'aos' {
    const AOS: {
      init: (options?: {
        duration?: number;
        once?: boolean;
        easing?: string;
        delay?: number;
        anchorPlacement?: string;
        offset?: number;
        [key: string]: any;
      }) => void;
      refresh?: () => void;
      refreshHard?: () => void;
      
    };
  
    export default AOS;
  }