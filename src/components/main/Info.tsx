import { FaRegPlayCircle } from 'react-icons/fa';
import { ContainerInfo } from '../styled.components';

export const Info = () => {
  return (
    <>
        <ContainerInfo height={50}>
          <section className="icon-info">
            <FaRegPlayCircle size={25} color={"red"}/>
          </section>
          <section className="title-info">
            Ironman
          </section>
        </ContainerInfo>
    </>
  )
}
