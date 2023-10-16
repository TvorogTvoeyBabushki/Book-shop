import { NextPage } from 'next'
import Image from 'next/image'

import Button from '../../components/ui/button/Button'
import Layout from '../../components/layout/Layout'

import styles from './Profile.module.scss'

const userData = {
	name: 'John Smith',
	email: 'example@mail.com'
}

const Profile: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className='container'>
					<section className={styles.profile}>
						<div>
							<div className={styles.profile_info}>
								<h2>profile</h2>
								<div>
									<Image
										src={'/profile.png'}
										alt='profile'
										width={235}
										height={235}
										priority={true}
									/>
									<div>
										<div className={styles.name}>
											<h3>YOUR NAME</h3>
											<h2>{userData.name}</h2>
										</div>
										<div>
											<h3>YOUR EMAIL</h3>
											<h2>{userData.email}</h2>
										</div>
										<Button>EDIT PROFILE</Button>
									</div>
								</div>
							</div>
							<div className={styles.profile_about}>
								<h3>ABOUT ME</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									in ante consequat, ornare nisi et, ultrices libero. Nunc nibh
									dolor, maximus quis auctor nec, tempor quis ipsum. Proin
									mollis pellentesque nulla ac varius.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</Layout>
	)
}

export default Profile
