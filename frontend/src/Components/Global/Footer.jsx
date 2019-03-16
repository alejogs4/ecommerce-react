import React from 'react'
import '../Styles/header.css'
import Nombre from '../../Images/NombreNEGRO.png';

/**
 * This component represents the application's footer
 */
const Footer = () => (
	<footer className="footer">
		<div className="content has-text-centered">
			<p>
				<img src={Nombre} alt="Nombre" width="120" height="80" /> 
				<br/>
				<a href="https://github.com/alejogs4" target="blank"> Alejandro Garcia</a>,
        <a href="https://github.com/maugarbru" target="blank"> Mauricio Garzon</a> and
        <a href="https://github.com/mvelezg99" target="blank"> Miguel Velez</a>. 
				<br/> The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php" target="blank"> MIT</a>.
      </p>
		</div>
	</footer>
)

export default Footer
