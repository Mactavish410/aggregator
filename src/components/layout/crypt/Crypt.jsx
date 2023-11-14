import React from 'react'
import styles from './Crypt.module.scss'
import CryptPrice from './cryptpryce/CryptPrice'
// import {
// 	QueryClient,
// 	QueryClientProvider,
// 	useQuery
// } from '@tanstack/react-query'
import axios from 'axios'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect } from 'react'
import _ from "lodash"


function Crypt() {
	const [posts, setPosts] = React.useState([]);
	useEffect(()=>{
		async function fetchData() {
			try {
				const res = await axios.get('https://api.cryptorank.io/v1/currencies?api_key=f82840021aa82ad93ecdefb00892677bdfef851bed6a62967bf1c6cb6377'); 
				setPosts(res.data.data);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, [])
	// console.log(posts)
	return (
		<div className={styles.main}>
			<h2>Курс валют</h2>
			<div>
				{posts.map((item)=> <CryptPrice key={item.id} {...item}/>)}
				{console.log(_.chunk(posts, 12))}
			</div>
		</div>
	)
}

export default Crypt
