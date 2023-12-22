import * as PropTypes from "prop-types"
import React from "react"
import MemberDropdown from "./MemberDropdown"
import MemberGroupTitle from "./MemberGroupTitle"
import PlusIcon from "./PlusIcon"
import RemoveButtonGroup from "./RemoveButtonGroup"
// const StyledDivider = styled(Divider)`
//   margin: 0 12px;
//   height: 4.5em;
//   top: 0.5em;
//   /* background: #f4f5f6; */
// `

const MemberGroup = ({ members, availableMembers, addMemberName, updateMethods, title }) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false)
  // const titles = `|  ${title}`
  return (
    <div>
      <MemberGroupTitle title={isFilterOpen ? title : ""} />
      {members.map((m) => (
        <RemoveButtonGroup
          key={m.index || m.name}
          onRemoveClick={() => {
            updateMethods.remove(m)
            console.log("m", members.length)
            if (members.length === 1) {
              setIsFilterOpen(false)
            }
          }}
        >
          <MemberDropdown
            type="selected"
            availableMembers={availableMembers}
            onClick={(updateWith) => {
              setIsFilterOpen(true)
              updateMethods.update(m, updateWith)
            }}
          >
            {m.title}
          </MemberDropdown>
        </RemoveButtonGroup>
      ))}
      <MemberDropdown
        type={members.length > 0 ? "icon" : "new"}
        onClick={(m) => {
          updateMethods.add(m)
          setIsFilterOpen(true)
        }}
        availableMembers={availableMembers}
      >
        {addMemberName}
        <PlusIcon />
      </MemberDropdown>
    </div>
  )
}

MemberGroup.propTypes = {
  members: PropTypes.array.isRequired,
  availableMembers: PropTypes.array.isRequired,
  addMemberName: PropTypes.string.isRequired,
  updateMethods: PropTypes.object.isRequired
}

export default MemberGroup
