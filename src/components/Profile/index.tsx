import { IconAndText } from '../IconAndText'
import { GithubLink, ProfileContainer, ProfileInformation } from './styles'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { MdPeopleAlt } from 'react-icons/md'

export const Profile = () => {
  return (
    <ProfileContainer>
      <img src="https://github.com/nicholascostadev.png" alt="" />
      <ProfileInformation>
        <GithubLink href="https://github.com/nicholascostadev">
          Github
          <FaExternalLinkAlt />
        </GithubLink>
        <strong>Nicholas Costa</strong>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <IconAndText icon={<AiOutlineGithub />}>nicholascostadev</IconAndText>
          <IconAndText icon={<FaBuilding />}>Rocketseat</IconAndText>
          <IconAndText icon={<MdPeopleAlt />}>32 seguidores</IconAndText>
        </div>
      </ProfileInformation>
    </ProfileContainer>
  )
}
