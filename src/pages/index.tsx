import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root className="TabsRoot" defaultValue="tabAll">
            <Tabs.List className="TabsList" aria-label="Manage your account">
              <Tabs.Trigger
                className="TabsTrigger  mx-2 rounded-full border border-solid bg-white px-4 py-2 text-gray-800 focus:outline-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value="tabAll"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                className="TabsTrigger  mx-2 rounded-full border border-solid bg-white px-4 py-2 text-gray-800 focus:outline-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value="tabPendding"
              >
                Pendding
              </Tabs.Trigger>
              <Tabs.Trigger
                className="TabsTrigger  mx-2 rounded-full border  border-solid  bg-white px-4 py-2 text-gray-800 focus:outline-none data-[state=active]:bg-gray-700 data-[state=active]:text-white"
                value="tabCompleted"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="TabsContent" value="tabAll">
              <div className="pt-10">
                <TodoList />
              </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tabPendding">
              <div className="pt-10">
                <TodoList pending={['pending']} />
              </div>
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tabCompleted">
              <div className="pt-10">
                <TodoList completed={['completed']} />
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        {/* <div className="pt-10">
          <TodoList />
        </div> */}
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
