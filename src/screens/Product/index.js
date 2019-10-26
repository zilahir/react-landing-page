/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import Paragraph from '../../components/common/Paragraph'
import Phone from '../../components/common/phone'
import Image from '../../components/common/Image'
import styles from './Product.module.scss'
import Screen1 from '../../assets/img/phonescreens/screen_1.png'
import GreyDots from '../../assets/img/misc/grey_dots.svg'

/**
* @author zilahir
* @function Product
* */

const Product = () => (
	<Grid
		fluid
		className={styles.fluid}
	>
		<TopHeader />
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.productContainer}>
					<Section imagePos="left">
						<HeaderH2 className={styles.subHeader} key="header" text="introducing our app" />
						<HeaderH1 key="header" text="Lorem ipsum" />
						<Paragraph key="p" className={styles.paragraph} text="Veniam tempor exercitation consectetur deserunt esse excepteur elit adipisicing. Officia laboris id tempor aliquip ullamco ullamco amet ex occaecat est eiusmod. Magna nisi veniam eiusmod nostrud aliqua aliqua reprehenderit anim. Excepteur est cillum sunt deserunt nostrud laborum in dolor nostrud ut Lorem nisi. Ut deserunt officia laborum proident ad qui consectetur dolore incididunt. Cupidatat nulla ea id irure labore consequat laboris cupidatat reprehenderit qui pariatur laboris magna." />
						<Phone
							key="image"
							className={styles.phoneAnimation}
							animationEnd={styles.resetAnimation}
						>
							<div style={{
								backgroundImage: `url(${Screen1})`,
								width: '100%',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: '50% 50%',
							}}
							/>
						</Phone>
					</Section>
				</div>
			</Col>
		</Row>
		<Row>
			<div className={styles.functionContainer}>
				<Col
					lg={12}
					xs={12}
					lgOffset={1}
				>
					<Section imagePos="right">
						<HeaderH2 className={styles.subHeader} key="header" text="introducing our app" />
						<HeaderH1 key="header" text="What we offer" />
						<Paragraph key="p" className={styles.paragraph} text="Veniam tempor exercitation consectetur deserunt esse excepteur elit adipisicing. Officia laboris id tempor aliquip ullamco ullamco amet ex occaecat est eiusmod. Magna nisi veniam eiusmod nostrud aliqua aliqua reprehenderit anim. Excepteur est cillum sunt deserunt nostrud laborum in dolor nostrud ut Lorem nisi. Ut deserunt officia laborum proident ad qui consectetur dolore incididunt. Cupidatat nulla ea id irure labore consequat laboris cupidatat reprehenderit qui pariatur laboris magna." />
						<Phone
							key="image"
							className={styles.phoneAnimation}
							animationEnd={styles.resetAnimation}
							secondaryImage={GreyDots}
							secondaryImageZoom={0.5}
						>
							<div style={{
								backgroundImage: `url(${Screen1})`,
								width: '100%',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: '50% 50%',
							}}
							/>
						</Phone>
					</Section>
				</Col>
			</div>
		</Row>
		<Footer />
	</Grid>
)

export default Product
