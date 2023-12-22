import { Menu } from "antd"
import * as PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ButtonDropdown from "./ButtonDropdown"
import MemberDropdown from "./MemberDropdown"
import MemberGroupTitle from "./MemberGroupTitle"
import PlusIcon from "./PlusIcon"
import RemoveButtonGroup from "./RemoveButtonGroup"

const DateRanges = [
  { title: "All time", value: undefined },
  { value: "Today" },
  { value: "Yesterday" },
  { value: "This week" },
  { value: "This month" },
  { value: "This quarter" },
  { value: "This year" },
  { value: "Last 7 days" },
  { value: "Last 30 days" },
  { value: "Last week" },
  { value: "Last month" },
  { value: "Last quarter" },
  { value: "Last year" }
]

const GroupLabel = styled.span`
  font-size: 14px;
  margin: 0 12px;
`

const TimeGroup = ({ members, availableMembers, addMemberName, updateMethods, title }) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false)

  const granularityMenu = (member, onClick) => (
    <Menu>
      {member.granularities.length ? (
        member.granularities.map((m) => (
          <Menu.Item key={m.title} onClick={() => onClick(m)}>
            {m.title}
          </Menu.Item>
        ))
      ) : (
        <Menu.Item disabled>No members found</Menu.Item>
      )}
    </Menu>
  )

  const dateRangeMenu = (onClick) => (
    <Menu>
      {DateRanges.map((m) => (
        <Menu.Item key={m.title || m.value} onClick={() => onClick(m)}>
          {m.title || m.value}
        </Menu.Item>
      ))}
    </Menu>
  )
  // const titles = `|  ${title}`
  return (
    <div>
      <MemberGroupTitle title={isFilterOpen ? title : <span style={{ marginTop: "5px" }}></span>} />
      {members.map((m) => [
        <RemoveButtonGroup
          onRemoveClick={() => {
            updateMethods.remove(m)
            setIsFilterOpen(false)
          }}
          key={`${m.dimension.name}-member`}
        >
          <MemberDropdown
            type="selected"
            onClick={(updateWith) => {
              updateMethods.update(m, { ...m, dimension: updateWith })
              setIsFilterOpen(true)
            }}
            availableMembers={availableMembers}
          >
            {m.dimension.title}
          </MemberDropdown>
        </RemoveButtonGroup>,
        <GroupLabel key={`${m.dimension.name}-for`}>for</GroupLabel>,
        <ButtonDropdown
          type="time-group"
          overlay={dateRangeMenu((dateRange) =>
            updateMethods.update(m, { ...m, dateRange: dateRange.value })
          )}
          key={`${m.dimension.name}-date-range`}
        >
          {m.dateRange || "All time"}
        </ButtonDropdown>,
        <GroupLabel key={`${m.dimension.name}-by`}>by</GroupLabel>,
        <ButtonDropdown
          type="time-group"
          overlay={granularityMenu(m.dimension, (granularity) =>
            updateMethods.update(m, { ...m, granularity: granularity.name })
          )}
          key={`${m.dimension.name}-granularity`}
        >
          {m.dimension.granularities.find((g) => g.name === m.granularity) &&
            m.dimension.granularities.find((g) => g.name === m.granularity).title}
        </ButtonDropdown>
      ])}
      {!members.length && (
        <MemberDropdown
          onClick={(member) => {
            updateMethods.add({ dimension: member, granularity: "day" })
            setIsFilterOpen(true)
          }}
          availableMembers={availableMembers}
          type="new"
        >
          {addMemberName}
          <PlusIcon />
        </MemberDropdown>
      )}
    </div>
  )
}

TimeGroup.propTypes = {
  members: PropTypes.array.isRequired,
  availableMembers: PropTypes.array.isRequired,
  addMemberName: PropTypes.string.isRequired,
  updateMethods: PropTypes.object.isRequired
}

export default TimeGroup
