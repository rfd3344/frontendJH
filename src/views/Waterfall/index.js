
import React from 'react';
import { setImageURL } from './utilis';
import	'./waterfall.less';
import AdminTemplate from '_layout/AdminTemplate';
import Loading from './Loading';

export default class Waterfall extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			HideLoad: true,
			ImageURL : Array(0)
		};
	}
	componentDidMount() {
		this.setState({ ImageURL: setImageURL(this.state.ImageURL) });
		window.addEventListener('scroll', this.handleScroll);
	};

	handleScroll() {
		// scroll to bottom
		if( this.state.HideLoad &&
		window.innerHeight + window.scrollY > document.body.scrollHeight-20 ){
			this.setState({ HideLoad: false });
			setTimeout( ()=>{
				let ImageUrl = setImageURL(this.state.ImageURL)
				this.setState({
					ImageURL: ImageUrl,
					HideLoad: true
				});
			}, 1000);
		}
	};
	render() {
			return (
				<AdminTemplate>
					<section id="waterfall" >
						<div className="images">
						{
							this.state.ImageURL.map( item=>(
								<img src={item} />
							))
						}
						</div>
						<div hidden={this.state.HideLoad1}> <Loading /> </div>
						<br/><br/>
					</section>
				</AdminTemplate>
			);
	}
}
