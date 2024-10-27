import React, { useState } from "react"
import { Box, Text, useFocus, useFocusManager, useInput, useApp  } from "ink"
import { Tab, Tabs } from "ink-tab";
import Markdown from "@/lib/Markdown";
import dedent from "dedent";
import md from './my.md?raw';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

function TabExample(props) {
    const [activeTabName, setActiveTabName] = useState(null);
    const { focusNext, focusPrevious, enableFocus, disableFocus } = useFocusManager();
    const { isFocused } = useFocus({ autoFocus: true, id: 'someId' });
    const app = useApp()
    useInput((input, key) => {
        if (key.return && activeTabName === "exit") {
            app.exit()
        }
        // if (input === "q") {
        //     process.exit(0)
        // }
        if (key.rightArrow) {
            focusNext()
        }
        if (key.leftArrow) {
            focusPrevious()
        }
    });

    function handleTabChange(name, activeTab) {
        setActiveTabName(name);
    }

    return (
        <Box flexDirection="row">
            <Box flexShrink={0} width={10} borderStyle="classic" borderLeft={false} paddingLeft={1} paddingRight={1}>
                <Tabs
                    keyMap={{
                        useNumbers: false,
                    }}
                    width={6}
                    showIndex={false}
                    isFocused={isFocused}
                    flexDirection="column"
                    onChange={handleTabChange}
                    colors={{ activeTab: { color: 'red', backgroundColor: 'grey' } }}
                >
                    <Tab name="welcome">欢迎词</Tab>
                    <Tab name="introduce">简介</Tab>
                    <Tab name="exit">退出</Tab>
                </Tabs>
            </Box>
            <Box width="100%" borderStyle="classic" borderLeft={false} paddingLeft={1} paddingRight={1}>
                {activeTabName === 'welcome' && <Box>{props.oneSlot}</Box>}
                {activeTabName === 'introduce' && <Box>{props.twoSlot}</Box>}
                {activeTabName === 'exit' && <Box width="100%" justifyContent="center" alignItems="center"><Text>按enter退出</Text></Box>}
            </Box>
        </Box>
    );
}

export function App() {
    return (<Box width="100%">
        <Box width={12} flexShrink={0} alignItems="center" borderStyle="classic">
            <Box width="100%" flexDirection="column" alignItems="center">
                <Text>XYX</Text>
                <Text>ADMIN</Text>
            </Box>
        </Box>
        <TabExample
            oneSlot={
                <Box flexDirection="column" height="100%"
                    justifyContent="center" alignItems="center" width="100%">
                    <Gradient name="rainbow">
                        <BigText text="WELCOME" align="left" />
                    </Gradient>
                    <Gradient name="rainbow">
                        <BigText text="XYX" align="left" />
                    </Gradient>
                </Box>
            }
            twoSlot={
                <Markdown>{dedent`${md}`}</Markdown>
            }
        >
        </TabExample>
    </Box>)
}
export default App