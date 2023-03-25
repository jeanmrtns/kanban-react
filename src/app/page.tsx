"use client"
import { Avatar, TaskCard } from "@/components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { randomUUID } from "crypto";
import { Faders, MagnifyingGlass, Pen } from "phosphor-react";
import { useState } from "react";
import clsx from "clsx";

const itemsFromBackend = [
  { id: "f1", content: "First task", title: "Super title 1", tags: ["Hello", "World", "1"] },
  { id: "f2", content: "Second task", title: "Super title 2", tags: ["Hello", "World", "2"] },
  { id: "f3", content: "Third task", title: "Super title 3", tags: ["Hello", "World", "3"] },
  { id: "f4", content: "Fourth task", title: "Super title 4", tags: ["Hello", "World", "4"] }
];

const columnsFromBackend = {
  ["todo"]: {
    name: "To do",
    items: itemsFromBackend
  },
  ["in-progress"]: {
    name: "In Progress",
    items: []
  },
  ["done"]: {
    name: "Done",
    items: []
  }
};

// TODO: Fix types
const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export default function Home() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <main>
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-[2rem]">Meu Kanban</h2>
          <button>
            <Pen size={24} color="#C7C7CD" weight="fill" />
          </button>
        </div>

        <Avatar />
      </header>

      <section className="mt-11 flex items-center gap-4">
        <button className="flex items-center gap-2 bg-violet-600 py-3 px-8 rounded text-white hover:bg-violet-500 transition-colors">
          <Faders size={24} weight="fill" />
          Filtrar
        </button>

        <label className="flex shadow-sm items-center border border-zinc-200 flex-1 py-3 gap-2 px-6 bg-white rounded focus-within:border-violet-500">
          <MagnifyingGlass size={24} weight="fill" className="text-zinc-500" />
          <input type="text" placeholder="Busque por cards, assuntos ou responsáveis..." className="placeholder:text-zinc-400 w-full border-0 outline-none" />
        </label>
      </section>

      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
      <section className="grid grid-cols-3 gap-[4.5rem] mt-14">
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div key={columnId}>
              <strong className="font-bold text-zinc-800 text-xl">{column.name}</strong>
              <div className="mt-4">
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={clsx("min-h-full", {
                          "border border-zinc-700 border-dashed": snapshot.isDraggingOver
                        })}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <TaskCard
                                      tags={item.tags}
                                      content={item.content}
                                      title={item.title}
                                    />
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </ul>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </section>

      </DragDropContext>
    </main>
  )
}