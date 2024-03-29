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
          <section className="details-info">
            <section className="list-info">
              <div>2020</div>
              <div>Fantastic</div>
              <div>2h 35min</div>
            </section>
          </section>
        </ContainerInfo>
    </>
  )
}
