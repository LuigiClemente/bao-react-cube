import React from "react";
import * as PropTypes from "prop-types";
import { Select } from "antd";
import MemberDropdown from "./MemberDropdown";
import RemoveButtonGroup from "./RemoveButtonGroup";
import FilterInput from "./FilterInput";
import PlusIcon from "./PlusIcon";

const FilterGroup = ({
  members,
  availableMembers,
  addMemberName,
  updateMethods,
}) => (
  <span>
    {members.map((m) => (
      <div
        style={{
          marginBottom: 12,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
        key={m.index}
      >
        {/* {JSON.stringify(members)} */}
        <RemoveButtonGroup onRemoveClick={() => updateMethods.remove(m)}>
          <MemberDropdown
            type="selected-filter"
            onClick={(updateWith) =>
              updateMethods.update(m, { ...m, dimension: updateWith })
            }
            availableMembers={availableMembers}
            style={{
              width: 200,
              textOverflow: "ellipsis",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              minWidth: 100,
              // marginTop: "5px",
            }}
          >
            {m.dimension.title}
          </MemberDropdown>
        </RemoveButtonGroup>
        {/* {JSON.stringify(m.operator)} */}
        <Select
          value={m.operator}
          onChange={(operator) => updateMethods.update(m, { ...m, operator })}
          style={{
            width: 200,
            marginRight: 8,
            minWidth: 100,
            // marginTop: "5px",
          }}
        >
          {m.operators.map((operator) => (
            <Select.Option key={operator.name} value={operator.name}>
              {operator.title}
            </Select.Option>
          ))}
        </Select>
        <FilterInput
          member={m}
          key="filterInput"
          updateMethods={updateMethods}
        />
      </div>
    ))}
    <MemberDropdown
      onClick={(m) => updateMethods.add({ dimension: m })}
      availableMembers={availableMembers}
      type="new"
    >
      {addMemberName}
      <PlusIcon />
    </MemberDropdown>
  </span>
);

FilterGroup.propTypes = {
  members: PropTypes.array.isRequired,
  availableMembers: PropTypes.array.isRequired,
  addMemberName: PropTypes.string.isRequired,
  updateMethods: PropTypes.object.isRequired,
};

export default FilterGroup;
