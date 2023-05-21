import { ShortedList, ShortedLink,ShortDiv,UrlDiv,ViewsDiv, DeleteUrlButton, TrashIcon, ClipBoard } from '../styles/homePageStyles.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmationModal from './ConfirmationModal.jsx';
export default function Links({shortenedLinks, deleteLink, openUrl}){
	function copyToClipBoard(shortUrl){
		navigator.clipboard.writeText(`${process.env.REACT_APP_APPURL}/${shortUrl}`);
		const customId = 'custom-id-copied';
		toast.success('Link copiado para a área de transferência', {toastId:customId});
	}
	function showModal({id, shortUrl}){
		
		const customId = 'custom-id-confirmModal';

		if(shortUrl){
			return(
				toast.info(
					<ConfirmationModal
						message="Você será redirecionado..."
						onConfirm={()=>{
							openUrl(shortUrl);
							toast.dismiss();
						}}
						onCancel={() => handleCancel(customId)}
					/>,
					{ autoClose: false,
						toastId: customId}
				)
			);
		}
		toast.info(
			<ConfirmationModal
				message="Deseja deletar seu link?"
				onConfirm={()=>{
					deleteLink(id);
					toast.dismiss();
				}}
				onCancel={() => handleCancel(customId)}
			/>,
			{ autoClose: false,
				toastId: customId}
		);
	}

	
	const handleCancel = (customId) => {
		toast.update(customId, { 
			render: 'Ação cancelada!', 
			type: toast.TYPE.ERROR
		});
		setTimeout(() => {
			toast.dismiss(customId);
		}, 1500);
	};

	
	return(
		<ShortedList>
			<ToastContainer
				position="top-left"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			{shortenedLinks.map(({id, shortUrl, url, visitCount})=>{
				return(
					<ShortedLink key={id}>
						<UrlDiv>{url}</UrlDiv>
						<ShortDiv onClick={()=> showModal({shortUrl})}>{shortUrl}</ShortDiv><ClipBoard onClick={()=>copyToClipBoard(shortUrl)}/>
						<ViewsDiv>{`Quantidade de visitantes: ${visitCount}`}</ViewsDiv>
						<DeleteUrlButton onClick={()=> showModal({id})}>
							<TrashIcon/>
						</DeleteUrlButton>
					</ShortedLink>
				);
			})}
		</ShortedList>
	);
}