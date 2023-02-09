import {Header} from 'src/components/sections';
import {RightDrawerProvider} from 'src/context';

interface LayoutBaseProps {
  children: JSX.Element;
}

export function LayoutBase({children}: LayoutBaseProps) {
  return (
    <RightDrawerProvider>
      <div className="absolute pt-[5.4rem] md:pt-[4.5rem] h-[100vh] w-[100vw] overflow-y-scroll scrollbar-hide">
        {children}
      </div>
      <Header />
    </RightDrawerProvider>
  );
}
