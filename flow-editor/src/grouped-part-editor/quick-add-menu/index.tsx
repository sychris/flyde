import * as React from "react";

import { Pos } from "../../utils";
import { PartDefinition, PartInstance } from "@flyde/core";
// ;
import { MenuDivider, MenuItem } from "@blueprintjs/core";
import { Select, ItemRenderer, ItemPredicate } from "@blueprintjs/select";
import { highlightText } from "../../lib/highlight-text";

export type QuickMenuPartMatch = {
  pinType: string;
  pinId: string;
  part: PartDefinition;
  type: "part";
};

export type QuickMenuValueMatch = {
  type: "value";
};

export type QuickMenuMatch = QuickMenuPartMatch | QuickMenuValueMatch;

export type QuickAddMenuData = {
  pos: Pos;
  matches: QuickMenuMatch[];
  ins?: PartInstance;
  pinType: string;
  pinId: string;
};

export type QuickMenuProps = QuickAddMenuData & {
  onAdd: (match: QuickMenuMatch) => void;
  onClose: () => void;
};

// Select<T> is a generic component to work with your data types.
// In TypeScript, you must first obtain a non-generic reference:
const PartSelect = Select.ofType<QuickMenuMatch>();

const matchTitle = (match: QuickMenuMatch) => {
  if (match.type === "part") {
    return `${match.part.id} - ${match.pinId} (${match.pinType})`;
  } else {
    return "Add value";
  }
};

const renderPart: ItemRenderer<QuickMenuMatch> = (match, { handleClick, modifiers, query }) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = matchTitle(match);

  if (match.type === "value") {
    return (
      <React.Fragment>
        <MenuDivider />
        <MenuItem
          active={modifiers.active}
          disabled={modifiers.disabled}
          // label={film.year.toString()}
          key={matchTitle(match)}
          onClick={handleClick}
          text={highlightText(text, query)}
        />
      </React.Fragment>
    );
  }

  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      // label={film.year.toString()}
      key={matchTitle(match)}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

const partPredicate: ItemPredicate<QuickMenuMatch> = (query, match, _index, exactMatch) => {
  const normalizedTitle = matchTitle(match).toLocaleLowerCase();
  const normalizedQuery = query.toLowerCase();

  if (exactMatch) {
    return normalizedTitle === normalizedQuery;
  } else {
    return normalizedTitle.includes(normalizedQuery);
  }
};

export const QuickAddMenu: React.FC<QuickMenuProps> = (props) => {
  const style = {
    left: props.pos.x,
    top: props.pos.y,
  };

  return (
    <div className="quick-add-menu" style={style}>
      <PartSelect
        className="quick-add-parts-select"
        items={props.matches}
        itemPredicate={partPredicate}
        itemRenderer={renderPart}
        inputProps={{ className: "quick-add-input" }}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={(match) => props.onAdd(match)}
        popoverProps={{
          isOpen: true,
          onClose: () => props.onClose(),
        }}
      />

      {/* </Card> */}
    </div>
  );
};
