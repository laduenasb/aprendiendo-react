
export function TwitterFollowCard ({userName, name, isFollowing}) {
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar" 
					alt="El avatar de un gato aburrido" 
					// src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" />
					src={`https://unavatar.io/${userName}`} />
				<div className="tw-followCard-info">
					<strong className="tw-followCard-text" >{name}</strong>
					<span className="tw-followCard-infoUserName">@gatoaburrido</span>
				</div>
			</header>

			<aside>
				<button className="tw-followCard-button" >
					Seguir
				</button>
			</aside>
		</article>
	)
}