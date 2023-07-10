import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
	const formattedUserName = (userName) => `@${userName}`

	// const midudev = {isFollowing: true, userName: 'midudev', formattedUserName}
	// const pheralb = {isFollowing: false, userName: 'pheralb', formattedUserName}
	// const laduenasb = {isFollowing: false, userName: 'laurond', formattedUserName}
	// const formattedUserName = <span>@midudev</span>
	return (
		<section className="App">
			<TwitterFollowCard isFollowing={false} formattedUserName={formattedUserName} userName="laurencio">
				Luis Dueñas
			</TwitterFollowCard>
			<TwitterFollowCard isFollowing formattedUserName={formattedUserName} userName="midudev">
				Miguel Angel Duran
			</TwitterFollowCard>
			<TwitterFollowCard isFollowing formattedUserName={formattedUserName} userName="cuates">
				Pepito Perez
			</TwitterFollowCard>
		</section>
	)
}