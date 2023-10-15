import { Circles } from  'react-loader-spinner'
import { WrapperLoader } from './Loader.styled';

export const Loader = () =>
(<WrapperLoader>
    <Circles
  visible={true}
  height="80"
  width="80"
  color = "grey"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>
</WrapperLoader>);