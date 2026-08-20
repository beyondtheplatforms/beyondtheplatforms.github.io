---
layout: post
title: "Copilot Skill Recorder"
date: 2026-08-04
category: "Copilot Studio"
tags: ["MCP", "AI Agents", "Copilot Studio", "Skills"]
excerpt: "I taught a procedure to an AI Agent simply by recording my screen."
---

Harness: the biggest Copilot Studio shift in recent years.

<img src="{{ '/assets/images/copilot-skill-recorder.jpg' | relative_url }}" alt="Copilot Skill Recorder">

I taught a procedure to an AI Agent simply by recording my screen
Over the past few months, we have seen a real acceleration around AI agents: Skills, MCP Servers, orchestration, intelligent automations, and new ways to turn operational activities into reusable capabilities.

The question I hear most often during courses, events, and projects is always the same: how long does it really take to teach an agent to perform a procedure?

Microsoft is trying to answer this question with a very interesting project: Skill Recorder.

The idea in one sentence You record a procedure once, and AI tries to turn it into a reusable Skill.

We are not talking about a macro. We are not talking about traditional RPA. And most importantly, we are not talking about recording a rigid sequence of clicks.

The point is different: observing an activity performed by a person and converting it into a procedure that an agent can understand, describe, adapt, and reuse.

## What Skill Recorder is

Skill Recorder is a Microsoft open-source project that makes it possible to record a desktop work session and turn it into a Skill. During the recording, it can collect elements such as:

- desktop activity
- window changes
- web navigation
- clicks and interactions
- optional voice narration

Once the recording is complete, GitHub Copilot analyzes what happened and tries to reconstruct:

- the goal of the procedure
- the logical steps
- the required inputs
- the expected results
- an exportable Skill

This is the most interesting part: AI does not only try to understand where we clicked; it tries to interpret what we were trying to achieve.

## Installation and configuration

Installation requires a GitHub account with access to Copilot. On Windows, the procedure uses PowerShell and a specific release commit, so that a precise version of the project is installed.

$commit=”<commit>”
$env:SKILL_RECORDER_COMMIT=$commit
irm “https://raw.githubusercontent.com/microsoft/skill-recorder/$commit/install.ps1&#8221; | iex
On first launch, the application requires a few configuration steps:

- checking that GitHub Copilot is available
- GitHub authorization through Device Code Flow
- enabling screen recording
- optional voice transcription configuration
- opening the Skill Recorder interface

Practical note Voice transcription is not mandatory for the first test. You can start by recording only the screen and activity, then enable voice at a later stage.

...

