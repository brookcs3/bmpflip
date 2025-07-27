# Architecture Overview

This project is divided into a lightweight server and a browser-based client.

## Server

- Built with **Express**.
- Serves static assets and provides a small API surface.
- Uses **Vite** during development for hot reloading and builds the client for production.

## Client

- Written in **React** and bundled with Vite.
- Handles all file conversion directly in the browser.
- Uses a **Web Worker** to offload processing.
- Runs **FFmpeg.wasm** in the worker for converting media files.

### Processing Flow

```mermaid
flowchart LR
    U[Upload Files] --> W[Web Worker]
    W --> F[FFmpeg.wasm]
    F --> D[Download Result]
```
