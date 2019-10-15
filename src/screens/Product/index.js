/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TopHeader from '../../components/TopHeader'
import Footer from '../../components/Footer'
import Section from '../../components/common/Section'
import HeaderH1 from '../../components/common/HeaderH1'
import HeaderH2 from '../../components/common/HeaderH2'
import Paragraph from '../../components/common/Paragraph'
import Image from '../../components/common/Image'
import styles from './Product.module.scss'

/**
* @author zilahir
* @function Product
* */

const Product = () => (
	<Grid
		fluid
	>
		<TopHeader />
		<Row>
			<Col lg={12} xs={12}>
				<div className={styles.productContainer}>
					<Section imagePos="left">
						<HeaderH2 className={styles.subHeader} key="header" text="introducing our app" />
						<HeaderH1 key="header" text="Lorem ipsum" />
					</Section>
				</div>
			</Col>
		</Row>
	</Grid>
)

export default Product
