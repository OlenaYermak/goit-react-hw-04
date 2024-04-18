import { MagnifyingGlass } from 'react-loader-spinner';

import style from "./Loader.module.css"

export default function Loader() {
  return (
    <div className={style.loaderContainer}>
      <MagnifyingGlass
  visible={true}
  height="120"
  width="120"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#5151e0"
  />
      </div>

    )
}

