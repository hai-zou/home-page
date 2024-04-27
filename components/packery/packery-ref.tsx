import dynamic from 'next/dynamic';
import { forwardRef } from 'react';

const PackeryLayout = dynamic(() => import('./index'), { ssr: false });
const ForwardedRefPackery = forwardRef(function ForwardedRefPackery(props: { children: React.ReactNode; }, ref) {
  return <PackeryLayout forwardedRef={ref}>{props.children}</PackeryLayout>
});

export default ForwardedRefPackery