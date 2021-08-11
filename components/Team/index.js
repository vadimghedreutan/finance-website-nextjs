import Image from 'next/image'

import LeftImg from '../../images/left.jpg'
import RightImg from '../../images/right.jpg'

function Team() {
  return (
    <section className="section_team">
      <div className="container">
        <div className="team">
          <div className="team_left space-y-4">
            <div className="team_left__img">
              <Image src={LeftImg} width="250" height="250" objectFit="cover" />
            </div>
            <div className="team_left__content space-y-2">
              <p>
                Our goal is to be at the heart of the financial services
                industry as businesses expand across.
              </p>
              <h3>John Doe</h3>
              <span>CEO OF NORMA</span>
            </div>
          </div>
          <div className="team_right space-y-4">
            <div className="team_right__img">
              <Image
                src={RightImg}
                width="250"
                height="250"
                objectFit="cover"
              />
            </div>
            <div className="team_right__content space-y-2">
              <p>
                Our goal is to be at the heart of the financial services
                industry as businesses expand across.
              </p>
              <h3>John Doe</h3>
              <span>CEO OF NORMA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
