import cls from './StoreAddresses.module.css';
import location from '../../assets/location.svg'
import { Link, NavLink } from 'react-router-dom';
const StoreAddresses = () => {
  return (
    <div className='container'>
           <p style={{
            color:'#8C8C8C',
            fontSize: '14px',
            fontWeight: 500
        }}  >Главная   — <span style={{
            color: '#2A1F20',
            fontSize: '14px',
            fontWeight: 500
        }}>Магазины</span> </p>
      <div className={cls.title}>
        <h2 style={{ color: '#2A1F20' }}>Адреса магазинов</h2>
        <div className={cls.list}>
          <button>Списком</button>
            <button style={{ border: '1px solid red', color: 'black', background: 'white' }}>На карте</button>
        </div>
      </div>
      <div className={cls.flex}>

        <div className={cls.street}>
          <h4>ТЦ «Корона-Сити», 1 этаж</h4>
          <h5>ул. Денисовская, 8</h5>
        </div>
        <p>пн-вс:<span> 10:00-21:00</span></p>
        <p >Справочный центр:<br />
          <span >
            +375 29 8-057-998 МТС<br />
            +375 29 3-899-741 А1<br />
            +375 17 388 61 41
          </span>
        </p>
        <img style={{ marginTop: '-29px' }} src={location} alt='location' />
      </div>
      <hr />
      <div className={cls.flex}>

        <div className={cls.street}>
          <h4>ТЦ «Корона-Сити», 1 этаж</h4>
          <h5>ул. Денисовская, 8</h5>
        </div>
        <p>пн-вс:<span> 10:00-21:00</span></p>
        <p >Справочный центр:<br />
          <span >
            +375 29 8-057-998 МТС<br />
            +375 29 3-899-741 А1<br />
            +375 17 388 61 41
          </span>
        </p>
        <img style={{ marginTop: '-29px' }} src={location} alt='location' />
      </div>
      <hr />
      <div className={cls.flex}>

        <div className={cls.street}>
          <h4>ТЦ «Корона-Сити», 1 этаж</h4>
          <h5>ул. Денисовская, 8</h5>
        </div>
        <p>пн-вс:<span> 10:00-21:00</span></p>
        <p >Справочный центр:<br />
          <span >
            +375 29 8-057-998 МТС<br />
            +375 29 3-899-741 А1<br />
            +375 17 388 61 41
          </span>
        </p>
        <img style={{ marginTop: '-29px' }} src={location} alt='location' />
      </div>
      <hr />
      <div className={cls.flex}>

        <div className={cls.street}>
          <h4>ТЦ «Корона-Сити», 1 этаж</h4>
          <h5>ул. Денисовская, 8</h5>
        </div>
        <p>пн-вс:<span> 10:00-21:00</span></p>
        <p >Справочный центр:<br />
          <span >
            +375 29 8-057-998 МТС<br />
            +375 29 3-899-741 А1<br />
            +375 17 388 61 41
          </span>
        </p>
        <img style={{ marginTop: '-29px' }} src={location} alt='location' />
      </div>
      <hr />
      <div className={cls.flex}>

        <div className={cls.street}>
          <h4>ТЦ «Корона-Сити», 1 этаж</h4>
          <h5>ул. Денисовская, 8</h5>
        </div>
        <p>пн-вс:<span> 10:00-21:00</span></p>
        <p>Справочный центр:<br />
          <span>
            +375 29 8-057-998 МТС<br />
            +375 29 3-899-741 А1<br />
            +375 17 388 61 41
          </span>
        </p>
        <img style={{ marginTop: '-29px' }} src={location} alt='location' />
      </div>
      <hr />
    </div>
  );
};

export default StoreAddresses;