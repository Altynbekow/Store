import ts from '../../assets/ts.svg'
import loc from '../../assets/location.svg'
import tel from '../../assets/tel.svg'

import adress from '../../assets/adress.svg'
import centre from '../../assets/centre.svg'
import work from '../../assets/work.svg'

import cls from '../ShoppingCentre/ShoppingCentre.module.css'

const ShoppingCentre = () => {
    return (
        <div className='container'>
            <p style={{ color: '#8C8C8C' }} >Главная   —   Магазины   —   <span style={{ color: '#2A1F20' }}>ТЦ «Корона-Сити», 1 этаж</span></p>
            <div className={cls.flex}>
                <div style={{ marginRight: '30px' }}>
                    <h1>Магазин в ТЦ «Корона-Сити», 1 этаж</h1>
                    <img src={ts} />
                </div>
                <div className={cls.title}>
                    <img className={cls.ad} src={adress} />
                    <img className={cls.cn} src={centre} />
                    <img className={cls.wk} src={work} />
                </div>
            </div>
            <div className={cls.ct}>
            <iframe frameborder="no" width={'1240px'} height={'305px'} style={{borderRadius:'10px'}} src="http://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A42.87619997332496%2C%22lon%22%3A74.60351944100695%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001049792803%2C70000001020496435%22%7D"></iframe>
            </div>

        </div>
    )
}

export default ShoppingCentre