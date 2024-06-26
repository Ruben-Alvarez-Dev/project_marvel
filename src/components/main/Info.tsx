import { FaRegPlayCircle, FaStar } from 'react-icons/fa';
import { ContainerInfo, MiniAvatar, ButtonBuy } from '../styled.components';
import { useContext } from 'react';
import { Context } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Ironman from '../../assets/ironman.png';





export const Info = () => {
  
  const history = useNavigate();
  const { state } = useContext(Context);
  const goToDetails = (): void => {
    history('/details/2');
  }

  return (
    <>
        <ContainerInfo height={50}>
          <section className="icon-info">
            <FaRegPlayCircle size={25} color={"red"}/>
          </section>
          <section className="title-info">
            { state.name}
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
            <section className="description">
              <div className="description-title">Cast</div>
              <div className="images">
                {
                  [1, 2, 3, 4].map(item => <MiniAvatar key={item} src={Ironman}/> )
                }
              </div>
            </section>
          </section>
          
          <section className="button-buy">
            <ButtonBuy onClick={goToDetails}>Buy Ticket</ButtonBuy>
          </section>
        </ContainerInfo>
    </>
  )
}
