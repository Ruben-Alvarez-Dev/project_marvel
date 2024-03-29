import { FaRegPlayCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
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
            <section className="star">
              <FaStar size={25} color={"orange"}/>
              <FaStar size={25} color={"orange"}/>
              <FaStar size={25} color={"orange"}/>
              <FaStar size={25} color={"orange"}/>
              <FaStar size={25} color={"orange"}/>
            </section>
            <section className="description"> 
              <div className="description-title">
                Plot Sumary
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab voluptate dolor vel architecto laboriosam dolorem aliquid similique distinctio nihil, ea impedit nulla totam quaerat, hic officiis molestiae dicta asperiores!
              </div>  
            </section>
          </section>
        </ContainerInfo>
    </>
  )
}
