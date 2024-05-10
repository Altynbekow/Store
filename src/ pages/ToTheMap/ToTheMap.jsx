import cls from "../ToTheMap/ToTheMap.module.css";

const ToTheMap = () => {
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
            <button>На карте</button>
        </div>
      </div>
            <div className={cls.flex}>
            <iframe frameborder="no" width={'1240px'} height={'520px'} style={{borderRadius:'10px'}} src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.87619997332496%2C%22lon%22%3A74.60351944100695%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001049792803%2C70000001020496435%22%7D"></iframe>
            </div>
        </div>
    )
}

export default ToTheMap