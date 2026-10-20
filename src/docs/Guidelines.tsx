import type { ReactNode } from "react";

type GuidelinesProps = {
  do: ReactNode;
  doNote: string;
  dont: ReactNode;
  dontNote: string;
};

export function Guidelines({
  do: doSlot,
  doNote,
  dont,
  dontNote,
}: GuidelinesProps) {
  return (
    <div className="ui-guidelines">
      <section className="ui-guidelines__panel">
        <p className="ui-guidelines__label ui-guidelines__label--do">Do</p>
        {doSlot}
        <p className="ui-guidelines__note">{doNote}</p>
      </section>
      <section className="ui-guidelines__panel ui-guidelines__panel--dont">
        <p className="ui-guidelines__label ui-guidelines__label--dont">
          Don&apos;t
        </p>
        {dont}
        <p className="ui-guidelines__note">{dontNote}</p>
      </section>
    </div>
  );
}
