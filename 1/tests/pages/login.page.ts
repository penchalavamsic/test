import { recordEvidence } from '../helpers/step-evidence';
import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly kpitLogo: Locator;
  readonly limasLogo: Locator;
  readonly copyrightNotice: Locator;

  // Keycloak elements (available after clicking Sign In)
  readonly keycloakHeading: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly showPasswordButton: Locator;
  readonly keycloakSignInButton: Locator;
  readonly keycloakErrorMessage: Locator;

  // Post-login elements (available on dashboard)
  readonly userButton: Locator;
  readonly logoutOption: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.kpitLogo = page.getByRole('img', { name: 'KPIT Logo' });
    this.limasLogo = page.getByRole('img', { name: 'LIMAS Logo' });
    this.copyrightNotice = page.getByText('© KPIT Technologies Ltd. All rights reserved.');

    this.keycloakHeading = page.getByRole('heading', { name: 'Sign in to your account', level: 1 });
    this.usernameField = page.getByRole('textbox', { name: 'Username or email' });
    this.passwordField = page.getByLabel('Password', { exact: true });
    this.showPasswordButton = page.getByRole('button', { name: 'Show password' });
    this.keycloakSignInButton = page.getByRole('button', { name: 'Sign In' });
    // Keycloak error feedback — appears as alert or inline error after failed login
    this.keycloakErrorMessage = page.locator('.alert-error, .pf-c-alert.pf-m-danger, #input-error, [class*="feedback-text"]').first();

    this.userButton = page.locator('header, [role="banner"]').getByRole('button').last();
    this.logoutOption = page.getByRole('menuitem', { name: 'Logout' });
  }

  async goto(): Promise<void> {
    await recordEvidence('action-goto-login.page-43', async () => this.page.goto('/'));
  }

  async clickSignIn(): Promise<void> {
    await recordEvidence('action-click-login.page-47', async () => this.signInButton.click());
    await this.page.waitForURL(/\/realms\/[^/]+\/protocol\/openid-connect\/auth(?:\?|$)/);
  }

  async clickSignInNoWait(): Promise<void> {
    await recordEvidence('action-click-login.page-52', async () => this.signInButton.click());
  }

  async navigateToKeycloak(): Promise<void> {
    await this.goto();
    await this.clickSignIn();
  }

  async fillCredentials(username: string, password: string): Promise<void> {
    await recordEvidence('action-fill-login.page-61', async () => this.usernameField.fill(username));
    await recordEvidence('action-fill-login.page-62', async () => this.passwordField.fill(password));
  }

  async submitKeycloakLogin(): Promise<void> {
    await recordEvidence('action-click-login.page-66', async () => this.keycloakSignInButton.click());
  }

  async fillAndSubmit(username: string, password: string): Promise<void> {
    await this.fillCredentials(username, password);
    await this.submitKeycloakLogin();
  }

  async signOut(): Promise<void> {
    await recordEvidence('action-click-login.page-75', async () => this.userButton.click());
    await recordEvidence('action-click-login.page-76', async () => this.logoutOption.click());
    // After logout, Keycloak redirects back to the login page
    await this.page.waitForURL('**/login', { timeout: 15000 });
  }
}
