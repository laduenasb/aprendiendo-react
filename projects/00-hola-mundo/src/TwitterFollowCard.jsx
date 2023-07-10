import { useState } from "react"

export function TwitterFollowCard ({formattedUserName, children, userName = 'unknown'}) {
	const [isFollowing, setIsFollowing] = useState(false)

	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button'
	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}
	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar" 
					alt="El avatar de un gato aburrido" 
					// src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4" />
					src={`https://unavatar.io/${userName}`} />
				<div className="tw-followCard-info">
					{/* <strong className="tw-followCard-text">{name}</strong> */}
					<strong className="tw-followCard-text">{children}</strong>
					{/* <span className="tw-followCard-infoUserName">{formattedUserName(userName)}</span> */}
					<span className="tw-followCard-infoUserName">{formattedUserName(userName)}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	)
}