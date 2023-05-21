import { List, LinkItem } from '../styles/rankingPageStyles.js';


export default function LinksList({links}){
	return(
		<List>
			{links.map(({id, name, linksCount, visitCount}, i)=>{
				return(
					<LinkItem key={id}>{`${i+1}. ${name} - ${linksCount} links - ${visitCount} visualizações`}</LinkItem>
				);
			})}
		</List>
	);
}